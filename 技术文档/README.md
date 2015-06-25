# JnPlants
Plants in JnUniversity android app 

##编程注意

###每个包里面需要有的 
----
fragment 使用单例模式，模板：

```
public class PlantFragment extends Fragment{
    private static PlantFragment instance;

	//  TODO:初始化实例
    static PlantFragment getInstance() {

        return instance;
    }
}
```

xxxOuter 使用策略模式，示例：

```

public class Plant implements Fragment{

    @Override
    public Fragment getFragment(){
        return PlantFragment.getInstace();
    }
}
```

模块里如何在**xxxOuter里**提供**切换**activity里的container的功能的示例：

```
//      TODO：添加初始化Fragment所需参数，以及修改函数体，
        public void ShowSceneFragment(){
            Main.replaceContainer(new Scene());
        }
//      TODO：完成ShowSceneFragment调用的相应构造函数
        public Scene() {
        }
```

内部静态类访问示例（针对一个模块里有多个fragment的情况）：

- 内部实现

```
public class Scenes implements Fragment{
    public static Scene getScene(){
    //      TODO：添加用来初始化Scene的参数
        return new Scene();
    }
    public static class Scene implements Fragment{
    }
```
- 外部调用

```
Scenes.Scene();
Scenes.Scene().ShowSceneFragment();
```