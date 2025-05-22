import { FaHandHoldingHeart } from 'react-icons/fa';
import { FiShoppingBag } from 'react-icons/fi';
import { LiaPiggyBankSolid } from 'react-icons/lia';
import {
  RiHome5Line,
  RiMessageLine,
  RiSearchEyeLine,
  RiSettings2Line,
  RiShoppingBag4Line,
} from 'react-icons/ri';
// const route = '/app'
export const sidebarLinks = [
  { label: 'Home', path: '/', icon: RiHome5Line },
  { label: 'Message', path: '/message', icon: RiMessageLine },
  { label: 'Find Property', path: '/property/find', icon: RiSearchEyeLine },
  { label: 'Pro Care', path: '/pro-care/buy', icon: FaHandHoldingHeart },
  { label: 'Save Money', path: '/save-to-own', icon: LiaPiggyBankSolid },
  {
    label: 'Lease and Sell',
    path: '/lease-and-sell',
    icon: RiShoppingBag4Line,
  },
  {
    label: 'Affiliate Market',
    path: '/affiliate-market',
    icon: FiShoppingBag,
  },
  {
    label: 'Settings',
    path: '/settings',
    icon: RiSettings2Line,
  },
];
