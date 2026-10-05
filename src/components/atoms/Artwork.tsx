import styled from 'styled-components';
/** Quadrants of the generated artwork sheet, composed with CSS. */
export const Artwork = styled.div<{ $scene: 'collage' | 'brand' | 'game' }>`
  background-image: url('/artwork-sheet.png'); background-size: 200% 200%;
  background-position: ${({ $scene }) => $scene === 'collage' ? '100% 0' : $scene === 'brand' ? '0 100%' : '100% 100%'};
  width: 100%; aspect-ratio: 1;
`;
