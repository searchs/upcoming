import React, { Component } from 'react';
// import { nanoid } from 'nanoid';
// import Form from './components/Form';
// import FilterButton from './components/FilterButton';
// import Card from './components/Card';
// import NoticeCard from './components/NoticeCard';
// import Footer from './components/Footer';

import NoticeList from './components/NoticeList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notices: []
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((todos) => this.setState({ notices: todos }))
      .catch((err) => {
        console.log(err);
      });
  }

  // // const [notices, setNotices] = useState(props.notices);
  // addNotice = (name) => {
  //   const newNotice = {
  //     id: 'notice-' + nanoid(),
  //     name: name,
  //     completed: false
  //   };

  //   this.state.setState({ notices: newNotice });
  //   // this.state.setNot /ices([...notices, newNotice]);
  // };

  // noticeList = notices.map((notice) => (
  //   <Card
  //     id={notice.id}
  //     name={notice.name}
  //     completed={notice.completed}
  //     key={notice.id}
  //     toggleNoticeCompleted={toggleNoticeCompleted}
  //     deleteNotice={deleteNotice}
  //     editNotice={editNotice}
  //   />
  // ));

  //  toggleNoticeCompleted = (id) => {
  //   const updatedNotices = notices.map((notice) => {
  //     if (id === notice.id) {
  //       return { ...notice, completed: !notice.completed };
  //     }
  //     return notice;
  //   });
  //   setNotices(updatedNotices);
  // };

  // deleteNotice = (id) => {
  //   console.log(id);
  //   const remainingNotices = notices
  //     .filter((notice) => id !== notice.id)
  //     .filter((notice) => notice.completed !== true);
  //   setNotices(remainingNotices);
  // }

  //  editNotice = (id, newName) =>  {
  //   const editedNoticeList = notices.map((notice) => {
  //     // if this task has the same ID as the edited task
  //     if (id === notice.id) {
  //       //
  //       return { ...notice, name: newName }; //adding a new property to existing object
  //     }
  //     return notice;
  //   });
  //   setNotices(editedNoticeList);
  // }

  //  noticesNoun = noticeList.length !== 1 ? 'notices' : 'notice';
  //  headingText = `${noticeList.length} ${noticesNoun} remaining`;

  // return (
  //   <div className='noticeapp stack-large'>
  //     <h1>Live Notices</h1>
  //     <Form addNotice={addNotice} />
  //     <div className='filters btn-group stack-exception'>
  //       <FilterButton />
  //       <FilterButton />
  //       <FilterButton />
  //     </div>
  //     <h2 id='list-heading' className='f2 light-purple'>
  //       {headingText}
  //     </h2>
  //     <div
  //       role='list'
  //       className='notice-list stack-large stack-exception'
  //       aria-labelledby='list-heading'
  //     >
  //       {noticeList}
  //     </div>
  //     <Footer />
  //   </div>
  // );
  // )

  render() {
    const { notices } = this.state;
    console.log(notices);

    return (
      <div className='pa3 ma2'>
        <h3>Hurry we have something!</h3>
        <NoticeList notices={notices} />
      </div>
    );
  }
}

export default App;
