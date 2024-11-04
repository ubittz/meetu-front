import Flex from '@@components/Flex';
import { FormGroupProps } from '@@components/FormGroup/types';
import Typography from '@@components/Typography';

function FormGroup({ label, children, ...props }: FormGroupProps) {
  return (
    <Flex.Vertical gap={4} {...props}>
      {label && (
        <Typography.Main fontWeight={700} fontSize='14px'>
          {label}
        </Typography.Main>
      )}
      {children}
    </Flex.Vertical>
  );
}

export default FormGroup;
