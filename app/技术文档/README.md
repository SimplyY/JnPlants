# JnPlants
Plants in JnUniversity android app 

## 编程注意

> 后面的内容即是在讲如何切换fragment和接口的使用
> 接口统一使用xxxOuter来表示，只有xxxOuter对外可见
> 每个包里面包含有fragemnt、其他类来共同完成一个在MainActivity功能视图，xxxOuter是对外的接口，也就是整个包对外提供的功能。

1. 使用策略模式来规定使用多态性切换的方式
2. 使用单例模式的原因
	1. fragment 本来就应该是只会实例化一次，activity也是一样。
	2. 因为下面代码中切换fragment需要此fragment作为参数，使用单例模式可以来提供此fragment比较优雅。

```
void replaceFragment(Fragment targetShowingFragment){
        FragmentManager fragmentManager = getSupportFragmentManager();
        FragmentTransaction fragmentTransaction = fragmentManager.beginTransaction();
        fragmentTransaction.replace(R.id.container, targetShowingFragment);
    }
```


### 每个包里面需要有的 

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
