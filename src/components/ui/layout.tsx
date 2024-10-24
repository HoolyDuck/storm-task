export const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="flex flex-col items-center w-10/12 max-w-md gap-4 sm:w-6/12">
      {children}
    </div>
  );
};
