
export function Button({ children, onClick, variant = 'default' }) {
  const styles = {
    default: 'bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl',
    outline: 'border border-blue-500 text-blue-500 px-4 py-2 rounded-xl'
  };
  return (
    <button onClick={onClick} className={styles[variant]}>
      {children}
    </button>
  );
}
