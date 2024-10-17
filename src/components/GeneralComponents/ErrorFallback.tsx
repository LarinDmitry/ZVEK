import React, {FC} from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';

interface ErrorMessageProps {
  message: string;
}

interface ErrorBoundaryProps {
  error: ErrorMessageProps;
  resetErrorBoundary: () => void;
}

const ErrorFallback: FC<ErrorBoundaryProps> = ({error, resetErrorBoundary}) => (
  <>
    <Text>Щось пішло не так:</Text>
    <div>{error.message}</div>
    <Button onClick={resetErrorBoundary}>Спробуйте знову</Button>
  </>
);

const Text = styled.div`
  margin: 10px 0;
`;

export default ErrorFallback;
