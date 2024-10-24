export const Modal = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      {children}
    </div>
  );
};
