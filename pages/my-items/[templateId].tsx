import { FC, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import {
  NFT_DETAIL_PAGE_TYPES,
  NftDetailPage,
  LoadingPage,
} from '../../components';
import { useAuthContext } from '../../components/Provider';
import { useFetchNft, useFetchOwnedNfts } from '../../hooks';
import { RouterQuery } from '../../utils/constants';
import customizationJson from '../../custom/customization';
import { Text } from '../../custom/localization';

const MyNft: FC<{ text: Text }> = ({ text }) => {
  const { currentUser, isLoadingUser } = useAuthContext();
  const owner = currentUser ? currentUser.actor : '';

  const router = useRouter();
  const { templateId } = router.query as RouterQuery;

  const {
    template,
    isLoading: isTemplateLoading,
    error: templateError,
  } = useFetchNft(templateId);

  const {
    assets,
    saleData: { salePrices, saleIds },
    isLoading: isSaleDataLoading,
    error: saleDataError,
  } = useFetchOwnedNfts({
    templateId,
    owner,
  });

  const [selectedAssetId, setSelectedAssetId] = useState<string>('');

  useEffect(() => {
    if (!currentUser && !isLoadingUser) {
      router.push(`/${templateId}`);
    }
  }, [currentUser, isLoadingUser, templateId]);

  useEffect(() => {
    setSelectedAssetId(assets[0] ? assets[0].asset_id : '');
  }, [assets]);

  if (
    isLoadingUser ||
    isSaleDataLoading ||
    isTemplateLoading ||
    saleDataError ||
    templateError
  ) {
    return <LoadingPage />;
  }

  return (
    <NftDetailPage
      type={NFT_DETAIL_PAGE_TYPES.OWNED}
      template={template}
      detailPageStyles={customizationJson.detailPage}
      detailPageText={text.detailPage}
      ownedPageProps={{
        owner,
        isSelectedAssetOnSale: !!saleIds[selectedAssetId],
        dropdownProps: {
          assets,
          salePrices,
          selectedAssetId,
          setSelectedAssetId,
        },
      }}
    />
  );
};

export default MyNft;
