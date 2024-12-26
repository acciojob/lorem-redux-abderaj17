
import React, { useEffect } from "react";

 import { useSelector, useDispatch } from "react-redux";
import { fetchLorem } from "../redux/loremSlice";
import { Provider } from "react-redux";
import store from "../redux/store";


const LoremIpsum = () =>{
  const dispatch = useDispatch();
  const content = useSelector((state) => state.lorem.content);
  const status = useSelector((state)=> state.lorem.status);
  const error = useSelector((state) => state.lorem.error);

  useEffect(()=>{
    if(status === 'idle'){
      dispatch(fetchLorem());
    }

  }, [dispatch, status]);

  return(
    <div>
      <h1>Lorem Ipsum Content</h1>
      {status==='loading' && <p>Loading...</p>}
      {status=== 'failed' && <p>Error: {error}</p>}
      {status === 'succeeded' && (
        <ul>
          {content.map((paragraph, index)=>(
            <li key={index}>{paragraph}</li>
          ))}
        </ul>
      )} 
    </div>
  );

};


const App = () => {
  return (
<Provider store={store}>
  <LoremIpsum/>
</Provider>
  )
}

export default App
