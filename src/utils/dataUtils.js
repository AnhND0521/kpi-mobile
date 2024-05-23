const data = [
    {
        id: '1',
        name: 'Giảng dạy',
        description: '',
        due: new Date("2024-06-18"),
        repeat: 0,
        weights: {
            quantity: 50,
            quality: 25,
            time: 25
        },
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
        weights: {
            quantity: 50,
            quality: 25,
            time: 25
        },
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
        weights: {
            quantity: 50,
            quality: 25,
            time: 25
        },
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

let kpis;

exports.loadData = () => {
    localStorage.removeItem("data");
    localStorage.setItem("data", JSON.stringify(data));
    kpis = JSON.parse(localStorage.getItem("data"));
}

this.loadData();

exports.sortTasks = (kpi) => {
    kpi.tasks.sort((t1, t2) => {
        if (t1.status - t2.status !== 0) return t1.status - t2.status;
        return t1.date - t2.date;
    });
}

exports.sortKpis = () => {
    kpis.sort((k1, k2) => k1.due - k2.due);
    kpis.forEach(kpi => this.sortTasks(kpi));
}

this.sortKpis();


exports.findKpiById = (id) => {
    const kpi = kpis.filter(k => k.id == id)[0];
    this.sortTasks(kpi);
    return kpi;
}

exports.getNumberOfFinishedTasks = (kpi) => {
    return kpi.tasks.filter(t => t.status === 1).length;
}

exports.getCompletedPercentage = (kpi) => {
    if (kpi.tasks.length === 0) return 0;
    return Math.round(100 * this.getNumberOfFinishedTasks(kpi) / kpi.tasks.length);
}

exports.getCurrentKpis = () => {
    return kpis.filter(kpi => new Date(kpi.due) >= new Date() && this.getCompletedPercentage(kpi) < 100 );
}

exports.getPastKpis = () => {
    return kpis.filter(kpi => new Date(kpi.due) < new Date() || this.getCompletedPercentage(kpi) === 100);
}

exports.isValidKpi = (kpi) => {
    return kpi.name.trim().length > 0 && kpi.due;
}

exports.getNextKpiId = () => {
    if (kpis.length === 0) return '1';
    const ids = kpis.map(k => +k.id);
    console.log(ids);
    return `${Math.max(...ids) + 1}`;
}

exports.getNextTaskId = (kpi) => {
    if (kpi.tasks.length === 0) return `${kpi.id}.1`; 
    const ids = kpi.tasks.map(k => +k.id.split('.')[1]);
    console.log(ids);
    return `${kpi.id}.${Math.max(...ids) + 1}`;
}

exports.saveKpi = (kpi) => {
    if (!kpi.id) {
        kpi.id = this.getNextKpiId();
        kpi.tasks.forEach((t,i) => {
            t.id = `${kpi.id}.${i+1}`
        }); 
        kpis.push(kpi);
    } else {
        for (let i=0; i<kpis.length; i++) {
            if (kpis[i].id === kpi.id) {
                kpis[i] = kpi;
                break;
            }
        }
    }

    localStorage.removeItem("data");
    localStorage.setItem("data", JSON.stringify(kpis));
    return kpi;
}

exports.deleteKpi = (id) => {
    for (let i=0; i<kpis.length; i++) {
        if (kpis[i].id === id) {
            kpis.splice(i, 1);
            localStorage.removeItem("data");
            localStorage.setItem("data", JSON.stringify(kpis));
            return;
        }
    }
}

exports.getAllTasks = () => {
    return kpis.reduce((acc, kpi) => [...acc, ...kpi.tasks], []);
}

exports.save = (kpis) => {
    localStorage.removeItem("data");
    localStorage.setItem("data", JSON.stringify(kpis));
}

exports.getTasksByDate = (date) => {
    
    const res = [];
    for (const kpi of data) {
        for (const task of kpi.tasks) {
            if (task.date.toDateString() == date.toDateString()) {
                res.push({...task, kpi: kpi.id});
            }
        }
    }
    return res;
}