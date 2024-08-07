
import {  useAtom } from 'jotai';
import { sideBarActiveItem } from '@/configs/constants';

const useRouteChange = () => {
    //useAtom is state management library, initial value is 'sideBarActiveItem' is already a state item by atom, we can change state from diff component and change will be reflect on every component which are using that component
  const [activeRoute, setActiveRoute] = useAtom(sideBarActiveItem);
  return { activeRoute, setActiveRoute };
};

export default useRouteChange;
