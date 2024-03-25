import React from 'react';

interface MyFunctionalComponentProps {
  name: string;
}

// 함수형 컴포넌트 정의
const MyFunctionalComponent: React.FC<MyFunctionalComponentProps> = ({
  name,
}) => {
  return <div>Hello, {name}</div>;
};

export default MyFunctionalComponent;
