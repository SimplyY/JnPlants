# JnPlants
Plants in JnUniversity android app 

##编程注意

###每个包里面需要有的 
----
fragment 模板：

```
public class PlantFragment extends Fragment{
    private static PlantFragment instance;

	//  TODO:初始化实例
    static PlantFragment getInstance() {

        return instance;
    }
}
```

apixxx 示例：

```

public class ApiPlant implements ApiFragment{

    @Override
    public Fragment getFragment(){
        return PlantFragment.getInstace();
    }
}
```

模块里如何在**apixxx里**提供**切换**activity里的container的功能的示例：

```
//      TODO：添加初始化Fragment所需参数，以及修改函数体，
        public void ShowSceneFragment(){
            ApiMain.replaceContainer(new ApiScene());
        }
//      TODO：完成ShowSceneFragment调用的相应构造函数
        public ApiScene() {
        }
```

内部静态类访问示例（针对一个模块里有多个fragment的情况）：

- 内部实现

```
public class ApiScenes implements ApiFragment{
    public static ApiScene getApiScene(){
    //      TODO：添加用来初始化ApiScene的参数
        return new ApiScene();
    }
    public static class ApiScene implements ApiFragment{
    }
```
- 外部调用

```
ApiScenes.getApiScene();
ApiScenes.getApiScene().ShowSceneFragment();
```