import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import NotFound from './pages/NotFound';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword';
import ConfirmCode from './pages/auth/ConfirmCode';
import ResetPassword from './pages/auth/ResetPassword';
import Dashboard from './pages/Dashboard';
import Statistics from './pages/Statistics';
import AddKPI from './pages/AddKPI';
import Notifications from './pages/Notifications';
import KPIDetails from './pages/KPIDetails';
import EditKPI from './pages/EditKPI';
import TaskDetails from './pages/TaskDetails';
import Settings from './pages/Settings';
import Theme from './pages/Theme';
import PrivacyPolicy from './pages/PrivacyPolicy'
import Feedback from './pages/Feedback'
import EditTask from './pages/EditTask';
import { sortKpis } from './utils/dataUtils';
import KPIReport from './pages/KPIReport';

function App() {
  const data = [
    {
        id: '1',
        name: 'Giảng dạy',
        description: '',
        due: new Date("2024-06-18"),
        repeat: 0,
        tasks: [
            {
                id: '1.1',
                name: 'Dạy UI/UX',
                date: new Date("2024-05-16"),
                start: "9:20",
                end: "11:45",
                status: 2,
                repeat: 0,
                noti: 1
            },
            {
                id: '1.2',
                name: 'Dạy hệ tương tác',
                date: new Date("2024-05-13"),
                start: "12:30",
                end: "14:00",
                status: 1,
                repeat: 0,
                noti: 1
            },
            {
                id: '1.3',
                name: 'Dạy công nghệ phần mềm',
                date: new Date("2024-05-14"),
                start: "15:05",
                end: "17:30",
                status: 1,
                repeat: 0,
                noti: 1
            },
            {
                id: '1.4',
                name: 'Chấm bài sinh viên',
                date: new Date("2024-05-15"),
                start: "17:30",
                end: "19:00",
                status: 2,
                repeat: 0,
                noti: 2
            },
            {
                id: '1.5',
                name: 'Soạn đề thi cuối kỳ',
                date: new Date("2024-05-20"),
                start: "12:30",
                end: "14:00",
                status: 1,
                repeat: 0,
                noti: 1
            },
            {
                id: '1.6',
                name: 'Dạy IT4321',
                date: new Date("2024-05-25"),
                start: "8:25",
                end: "11:45",
                status: 0,
                repeat: 0,
                noti: 0
            },
            {
                id: '1.7',
                name: 'Dạy IT1234',
                date: new Date("2024-05-22"),
                start: "14:10",
                end: "15:50",
                status: 0,
                repeat: 0,
                noti: 0
            },
            {
                id: '1.8',
                name: 'Chấm bài',
                date: new Date("2024-05-29"),
                start: "11:45",
                end: "15:00",
                status: 1,
                repeat: 0,
                noti: 0
            },
            {
                id: '1.9',
                name: 'Soạn giáo án',
                date: new Date("2024-06-02"),
                start: "8:25",
                end: "12:30",
                status: 0,
                repeat: 0,
                noti: 0
            },
            {
                id: '1.10',
                name: 'Lên kế hoạch giảng dạy',
                date: new Date("2024-06-05"),
                start: "14:30",
                end: "16:30",
                status: 0,
                repeat: 0,
                noti: 0
            },
            {
                id: '1.11',
                name: 'Họp bộ môn',
                date: new Date("2024-06-06"),
                start: "9:30",
                end: "11:30",
                status: 0,
                repeat: 0,
                noti: 0
            }
        ]   
    },
    {
        id: '2',
        name: 'Nghiên cứu',
        description: '',
        due: new Date("2024-06-18"),
        repeat: 0,
        tasks: [
            {
                id: '2.1',
                name: 'Báo cáo đề tài ABC',
                date: new Date("2024-05-16"),
                start: "9:20",
                end: "11:45",
                status: 1,
                repeat: 0,
                noti: 0
            },
            {
                id: '2.2',
                name: 'Nghiên cứu đề tài XYZ',
                date: new Date("2024-05-18"),
                start: "12:30",
                end: "15:50",
                status: 2,
                repeat: 0,
                noti: 0
            },
            {
                id: '2.3',
                name: 'Họp lab',
                date: new Date("2024-05-22"),
                start: "6:45",
                end: "10:05",
                status: 1,
                repeat: 0,
                noti: 0
            },
            {
                id: '2.4',
                name: 'Trình bày đề tài trước Bộ',
                date: new Date("2024-05-14"),
                start: "15:00",
                end: "17:30",
                status: 1,
                repeat: 0,
                noti: 0
            },
            {
                id: '2.5',
                name: 'Lên lab',
                date: new Date("2024-05-25"),
                start: "14:00",
                end: "17:30",
                status: 0,
                repeat: 0,
                noti: 0
            },
            {
                id: '2.6',
                name: 'Tổng kết đề tài DEF',
                date: new Date("2024-05-30"),
                start: "8:00",
                end: "9:30",
                status: 0,
                repeat: 0,
                noti: 0
            },
            {
                id: '2.7',
                name: 'Lên phòng thí nghiệm',
                date: new Date("2024-06-03"),
                start: "6:45",
                end: "9:15",
                status: 1,
                repeat: 0,
                noti: 0
            },
            {
                id: '2.8',
                name: 'Khảo sát đề tài nghiên cứu',
                date: new Date("2024-06-07"),
                start: "14:30",
                end: "16:30",
                status: 1,
                repeat: 0,
                noti: 0
            }
        ]   
    },
    {
        id: '3',
        name: 'Phục vụ',
        description: '',
        due: new Date("2024-06-18"),
        repeat: 0,
        tasks: [
            {
                id: '3.1',
                name: 'Họp hội đồng cán bộ',
                date: new Date("2024-05-14"),
                start: "14:30",
                end: "16:30",
                status: 1,
                repeat: 0,
                noti: 0
            },
            {
                id: '3.2',
                name: 'Họp thường kỳ liên chi đoàn',
                date: new Date("2024-05-17"),
                start: "8:00",
                end: "10:00",
                status: 2,
                repeat: 0,
                noti: 0
            },
            {
                id: '3.3',
                name: 'Họp đại hội chi bộ Đảng',
                date: new Date("2024-05-25"),
                start: "14:00",
                end: "16:00",
                status: 1,
                repeat: 0,
                noti: 0
            },
            {
                id: '3.4',
                name: 'Họp bộ môn',
                date: new Date("2024-06-01"),
                start: "16:00",
                end: "17:30",
                status: 1,
                repeat: 0,
                noti: 0
            },
            {
                id: '3.5',
                name: 'Họp khoa',
                date: new Date("2024-06-02"),
                start: "14:00",
                end: "15:30",
                status: 0,
                repeat: 0,
                noti: 0
            },
            {
                id: '3.6',
                name: 'Hướng dẫn đồ án',
                date: new Date("2024-06-05"),
                start: "12:30",
                end: "14:30",
                status: 0,
                repeat: 0,
                noti: 0
            }
        ]
    }
  ];
  if (JSON.parse(localStorage.getItem("data")) == undefined) {
    localStorage.setItem("data", JSON.stringify(data));
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/confirm-code" element={<ConfirmCode />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/add-kpi" element={<AddKPI />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/kpi/:id" element={<KPIDetails />} />
          <Route path="/kpi/:id/report" element={<KPIReport />} />
          <Route path="/kpi/:id/edit" element={<EditKPI />} />
          <Route path="/kpi/:id/task/:taskid" element={<TaskDetails />} />
          <Route path="/kpi/:id/task/:taskid/edit" element={<EditTask />} />
          <Route path="/settings" element={<Settings />}></Route>
          <Route path="/settings/theme" element={<Theme />} />
          <Route path="/settings/privacy" element={<PrivacyPolicy />} />
          <Route path="/settings/feedback" element={<Feedback />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
