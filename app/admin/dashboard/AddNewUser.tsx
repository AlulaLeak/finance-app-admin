export default function AddNewUser() {
  return (
    <div className="w-90 center br2 bg-white pa2 mh3 mv4">
      <h3 className="f4 lh-copy-ns">
        <i className="material-icons v-mid">layers</i>Add New Asset
      </h3>
      <div className="mt3">
        <label
          className="db fw4 lh-copy f6 black-40 tracked ttu"
          htmlFor="asset-name"
        >
          Name
        </label>
        <input
          className="pa2 input-reset ba b--light-silver br2 bg-white-20 w-100 measure"
          type="text"
          name="asset-name"
          id="asset-name"
        />
      </div>
      <div className="mt3">
        <label
          className="db fw4 lh-copy f6 black-40 tracked ttu"
          htmlFor="asset-photo"
        >
          Photo
        </label>
        <input
          className="pa2 input-reset ba b--light-silver br2 bg-white-20 w-100 measure"
          type="text"
          name="asset-photo"
          id="asset-photo"
        />
        <button
          className="f6 link ba dim br2 ph3 pv2 mb2 dib black-40 bg-light-gray"
          // href="#0"
        >
          Upload
        </button>
      </div>
      <div className="mt3">
        <label
          className="db fw4 lh-copy f6 black-40 tracked ttu"
          htmlFor="asset-capacity"
        >
          Capacity
        </label>
        <select
          className="pa2 input-reset ba b--light-silver br2 bg-white-20 w-100 measure"
          name="asset-capacity"
          id="asset-capacity"
        >
          <option value="0">0</option>
          <option value="0">1</option>
          <option value="0">2</option>
        </select>
      </div>
      <div className="mt3">
        <label
          className="db fw4 lh-copy f6 black-40 tracked ttu"
          htmlFor="asset-description"
        >
          Capacity
        </label>
        <textarea
          className="pa2 input-reset ba b--light-silver br2 bg-white-20 w-100 measure"
          name="asset-description"
          id="asset-description"
        ></textarea>
      </div>
      <a
        className="f6 link dim br2 ph3 pv2 ma2 db white bg-blue ttu tc"
        href="#0"
      >
        <i className="material-icons v-mid">add</i> Add New Asset
      </a>
    </div>
  );
}
