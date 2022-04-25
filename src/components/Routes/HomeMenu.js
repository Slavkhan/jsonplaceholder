import {useSelector} from 'react-redux';
import DrawerRegistration from '../DrawerRegistration';
export default function HomeMenu() {
  const {currentUser} = useSelector((state) => state.auth);
  return <>{!currentUser && <DrawerRegistration />}</>;
}
