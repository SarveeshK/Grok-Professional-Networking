import { createBrowserRouter } from 'react-router-dom';
import Login from '../components/auth/Login';
import Signup from '../components/auth/Signup';
import ProfileView from '../components/profile/ProfileView';
import ProfileEdit from '../components/profile/ProfileEdit';
import PostCreate from '../components/posts/PostCreate';
import PostList from '../components/posts/PostList';
import Feed from '../components/feed/Feed';
import JobList from '../components/job-board/JobList';
import MessageList from '../components/messaging/MessageList';
import GlobalLayout from '../components/GlobalLayout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <GlobalLayout />, // Use Outlet in GlobalLayout
    children: [
      { index: true, element: <Login /> },
      { path: 'login', element: <Login /> },
      { path: 'signup', element: <Signup /> },
      { path: 'profile', element: <ProfileView /> },
      { path: 'profile/edit', element: <ProfileEdit /> },
      { path: 'posts/create', element: <PostCreate /> },
      { path: 'posts', element: <PostList /> },
      { path: 'jobs', element: <JobList /> },
      { path: 'messages', element: <MessageList /> },
      { path: 'feed', element: <Feed /> },
    ],
  },
]); 