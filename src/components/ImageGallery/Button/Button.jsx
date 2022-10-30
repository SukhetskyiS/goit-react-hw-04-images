export function Button({ onAddImg }) {
  return (
    <button type="button" className="button" onClick={onAddImg}>
      Load more
    </button>
  );
}
