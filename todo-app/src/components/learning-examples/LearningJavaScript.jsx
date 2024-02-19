

const person = {
    name: 'khyojun',
    address:{
        line1: 'bake street',
        city: 'London',
        country: 'UK',
    },
    profiles: ['twitter', 'linkedin', 'instagram'],
    printProfile: () => {
        person.profiles.map(profile => console.log(profile))
    }
}

// java sciprt 연습 
// 세미콜론 필요없었고, 동적 객체 가능하고
// java stream처럼 사용가능하고
// 객체에 함수 저장이 가능했다.


export default function LearningJavaScript(){

    return (

        <>
            <div>Learning {person.name} JavaScript</div>
            <div>{person.address.line1}</div>
            <div>{person.printProfile()}</div>
        </>
    )


}