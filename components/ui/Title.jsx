function Title({ children, isH1 = false, className = "" }) {
  if (isH1) {
    return <h1 className={` font-bold ${className}  text-4xl `}>{children}</h1>;
  }
  return (
    <h2 className={`text-3xl font-bold uppercase ${className}`}>{children}</h2>
  );
}

export default Title;
