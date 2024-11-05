import styled from 'styled-components';

const StyledBlankBox = styled.div<{ $width?: number; $height?: number }>`
  flex: 0 0 auto;
  ${({ $width }) => $width && `width: ${$width}px;`}
  ${({ $height }) => $height && `height: ${$height}px;`}
`;

function BlankBox({ width, height }: { width?: number; height?: number }) {
  return <StyledBlankBox $width={width} $height={height} />;
}

export default BlankBox;
