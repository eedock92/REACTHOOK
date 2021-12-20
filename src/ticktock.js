import React from 'react'


//State 사용 시 주의
//State를 수정하지 마세요 => setState()로 변경
//this.props와 this.state가 비동기적으로 업데이트 될 수 있어 state를 계산할 때 해당 값에 의존X


//Clock 클래스의 단일 인스턴스만 사용
class Clock extends React.Component {

  //클래스 컴포넌트는 항상 기본 constructor를 호출
   constructor(props){
     super(props);
     this.state = {date: new Date()};
   }

   //Dom에 렌더링 될 때마다 상태 설정 -> 마운팅
   componentDidMount(){
    this.timerID = setInterval(
      () => this.tick(),1000
    );
   }

   //Dom에서 삭제될 때마다 타이머 해체 -> 언마운팅
   componentWillUnmount(){
    clearInterval(this.timerID);
   }

   //컴포넌틑 로컬 state를 업데이트 하기 위해 setState() 사용
   tick() {
     this.setState({
       date: new Date()
     })
   }


  //render 메서드는 업데이트가 발생할 때마다 호출
  render(){
    return(
      <div>
        <h1>시계</h1>
        <h2>현재 시간은 {this.state.date.toLocaleTimeString()} 입니다.</h2>
      </div>
    )
  }

}

const ticktock = () => {
  return (
    <Clock/>
  )
};

export default ticktock
