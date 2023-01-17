# React Hooks 정리

### React.js 를 시작하기 전에 React Hooks 공부를 먼저 진행하고 강의를 듣고 싶어서 React LifeCycle 과 Hooks 공부를 먼저 진행했다.

## 0. React function LifeCycle

 * LifeCycle 순서
   * 1. 함수형 컴포넌트 호출
   * 2. 함수형 컴포넌트 내부에서 실행
   * 3. return()으로 화면에 렌더링
   * 4. useEffect() 실행

```
/*1. 함수 호출 */
const Test = () = > {
	/* 2. Mounting 함수형 컴포넌트 내부 */
	console.log('Mounting 함수형 컴포넌트 내부(제일 먼저 호출) ')

	/* 4. Mounting, Updating, UnMounting 은 useEffect() */
	useEffect(() => {
		/* 콜백함수 */
		callback()
	}, ['watch']); // watch 변수가 변경될 경우 콜백함수 호출
	
	return() /* 3. return() 실행 */
}
```

## 1. useState()
```
  const [state, setState] = useState(() => {  
    return initialState;  
  });
``` 
* state 값을 initialState 으로 정해준다.  
* 해당 state 값을 변경 하려면  setState() 함수를 이용해서 변경해준다.  
* useState는 state 값이 변경될때마다 렌더링을 한다.
* 콜백함수로 초기값을 지정하면 첫 렌더링 시에만 한 번 콜백을 실행해서 초기값을 만들고, 그 이후에는 콜백함수를 실행하지 않는다.  
따라서 useState 초기값 지정시 오래걸리는 작업이 있을때 사용해주면 좋다. 단, 콜백 함수가 리턴할 때까지 React가 렌더링을 하지 않고 기다리게 된다.
## 2. useEffect()
* useEffect()는 React function LifeCycle에서 mount, update, unmount 에서 사용된다. 예시로는 useEffect(() => {}, [watch]) 형태를 가지고 있다. 콜백함수와 watch 라는 배열 형태의 값이 있다.(watch라는 부분은 Vue.js에서 사용하는 watch와 비슷해서 watch라고 작성을 했다.)  
* Vue.js에서의 mounted() 와 watch가 합쳐진 것이 React.js에서 useEffect()와 흡사하다. 그래서 useEffect는 Hooks 중에서 가장 맨 처음에 이해가 갔다.  

* useEffect()는 3가지의 방법이 존재한다. 1. useEffect(() => {}) 2. useEffect(() => {}, []), 3. useEffect(() => {}, [watch])  
  * 1. 렌더링이 될때마다 useEffect의 콜백함수가 실행된다.  
  * 2. 렌더링이 완료된 후에 콜백함수가 호출된다. mounted 이후에 1번만 실행된다.  
  * 3. [watch] 배열안에 있는 값이 변경될때마다 콜백함수가 실행된다.

## 3. useRef()
* const state = useRef(initialState);  
* 사용하는 방법으로 파악할 경우에는 useState()와 굉장히 비슷하다고 생각하지만 useState()는 바뀌면 렌더링이 되지만 useRef()는 값을 저장하지만 렌더링이 되지 않는다.  
* 자주 바뀌는 값은 useState()가 아닌 useRef()에 저장해서 불필요한 렌더링을 하지 않는 것이 좋아보인다. 그리고 Ref는 DOM을 조작하기에 최적화 되어있다고 알고 있다.

## 4. useContext()
* useContext()는 불필요한 props를 생략하기에 좋다. 최상위 부모 컴포넌트에서 5개 아래인 자식 컴포넌트로 props를 통해 넘길 경우 코드가 지저분해지고 , 파악하기가 힘든 부분이 있다. 이런 방법을 해결할 필요 컴포넌트에만 props를 전달하기 위한 방법이 useContext() 방법이다.  
* const stateContext = createContext(null); 방식과 같이 선언을 해주고 아래 방식과 같이 사용하면 Text 컴포넌트에만 props를 전달 할 수 있다.  

```
<stateContext.Provider value={props}>  
  <Text />  
</stateContext.Provider>
```
## 5. useMemo()
* useMemo() 형태는 useEffect()와 매우 비슷하다고 생각하지만 Memoization가 가장 큰 차이점이다. Memoization은 결과값을 어딘가에 저장하고 꺼내서 재활용하는 방식이다.  
* useMemo()는 useMemo((x, y) => {}, [x, y]) 로 작성가능하다. [x, y] 부분이 렌더링했을 때 달라졌을 경우 콜백함수를 호출해서 새로운 결과값을 업데이트 해준다.
* useMemo()는 콜백함수에 있는 값(value)를 리턴해준다.

## 6. useCallback()
* useCallback() 도 useMemo() 와 마찬가지로 Memoization을 사용한다. 하지만 useCallback()과 useMemo()의 가장 큰 차이점은 useMemo()는 결과값을 리턴해주지만, useCallback()은 함수자체를 리턴해준다는 점이 있다.

## 7. useReducer()
* const [state, dispatch] = useReducer(reducer, initialState);
* dispatch로 액션을 발생시키면 초기값 initialState 을 가진 reducer 라는 함수를 호출한다. 함수 결과를 state 로 반환한다.
* dispatch는 dispatch({type: 타입명, payload: 보낼데이터}) 로 발생 시킬 수 있다.
