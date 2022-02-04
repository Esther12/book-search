import { applyMiddleware, createStore } from "redux";
import rootReducer from "../reducers/index";
import { middleware } from "../store";
import moxios from 'moxios';
import { searchBook } from "../services/api";
const testStore = data => {
  const createTestStore = applyMiddleware(...middleware)(createStore);
  return createTestStore(rootReducer, data);
};

describe("get search result action", ()=>{
  beforeEach(()=>{
    moxios.install();
  });
  console.log("error")
  afterEach(()=>{
    moxios.uninstall();
  });
  test("store is updated correctly",async ()=>{
    const expectedState =[{
      title:"title", 
      author:"author",
      publish:2022,
      cover:"cover",
      isbn:1
    },{
      title:"title", 
      author:"author",
      publish:2022,
      cover:"cover",
      isbn:2
    },{
      title:"title", 
      author:"author",
      publish:2022,
      cover:"cover",
      isbn:3
    }];
    const store = testStore();
    let request = moxios.requests.at(1);
    if(request){
      await moxios.wait(function(){
        request.respondWith({
          status:200, 
          response:expectedState
        })
      })
    }
    return store.dispatch(searchBook("The Great Gatsby")).then(()=>{
      const newState = store.getState();
      expect(newState.searchReducer.search).toEqual("The Great Gatsby")
    })
  })
})