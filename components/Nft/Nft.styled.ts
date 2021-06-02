import styled from 'styled-components';
import customizationJson from '../../custom/customization';

const {
  detailPage: { imageBackgroundColor, imagePlacement },
} = customizationJson;

export const NftContainer = styled.div`
  width: 50%;
  height: 100%;
  background-color: ${imageBackgroundColor || 'none'};
  margin-left: ${imagePlacement === 'left' ? '0' : '48px'};
  margin-right: ${imagePlacement === 'left' ? '48px' : '0'};
  padding: 3vh 3vw;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

export const Image = styled.img`
  object-fit: contain;
  max-width: 100%;
  max-height: 100%;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
`;

export const Video = styled.video`
  width: 100%;
  max-height: 100%;
  border-radius: 16px;
  outline: none;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
`;
