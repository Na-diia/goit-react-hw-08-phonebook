import { MagnifyingGlass } from "react-loader-spinner";

import { Wrap } from "./Loader.styled";

const Loader = () => {

    return (
      <Wrap>
        <MagnifyingGlass 
          visible={true}
          height="100"
          width="100"
          ariaLabel="MagnifyingGlass-loading"
          glassColor = '#c0efff'
          color = '#e15b64'
        />
      </Wrap>
    );
};

export default Loader;