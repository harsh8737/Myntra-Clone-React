import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { itemsActions } from "../store/itemsSlice";
// import { fetchStatusActions } from "../store/fetchStatusSlice";

const Fetchitems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    // fetch("http://localhost:8080/items", { signal })
    //   .then((res) => res.json())
    //   .then(({items}) => {
    //     dispatch(itemsActions.addInitialItems(items[0]));
        
    //   });

    return () => {
      // controller.abort();
    };
  }, [fetchStatus]);

  return (
    <>
  
    </>
  );
};

export default Fetchitems;
