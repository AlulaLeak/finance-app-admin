export default function InputFieldBox() {
  return (
    <form className="pa4 black-80">
      <div className="measure">
        <label htmlFor="name" className="f6 b db mb2">
          Name <span className="normal black-60">(optional)</span>
        </label>
        <input
          id="name"
          className="input-reset ba b--black-20 pa2 mb2 db w-100"
          type="text"
          aria-describedby="name-desc"
        />
        <small id="name-desc" className="f6 black-60 db mb2">
          Search for a specific person here.
        </small>
      </div>
    </form>
  );
}
