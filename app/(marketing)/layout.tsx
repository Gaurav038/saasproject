const MarketLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full bg-slate-100">
      <main className="pb-20 pt-40">{children}</main>
    </div>
  );
};

export default MarketLayout;
