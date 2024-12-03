import { ReactNode, useState } from 'react';

export const useModal = (initialVisible: boolean = false, initialContent?: ReactNode) => {
  const [visible, setVisible] = useState(initialVisible);
  const [content, setContent] = useState(initialContent);

  return {
    visible,
    content,
    setVisible,
    setContent,
  } as const;
};
