import { createRoot } from 'react-dom/client';

import App from '@@App';

// Strict Mode에서 render가 두번 되는 버그가 있어서 strictmode 제거
// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );
createRoot(document.getElementById('root')!).render(<App />);
