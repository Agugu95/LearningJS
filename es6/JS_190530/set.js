

// 중복을 허용하지 않는 데이터 집합 
const roles = new Set();

// 데이터 추가 
roles.add('user');
roles.add('admin'); // 'user', 'admin'

roles.size; // 2 

// 셋은 이미 추가하려는 데이터가 있다면 아무일도 일어나지 않음 
roles.add('user');
console.log(roles);
console.log(roles.delete('user')); // 셋에 있던 데이터 삭제 시 true 반환