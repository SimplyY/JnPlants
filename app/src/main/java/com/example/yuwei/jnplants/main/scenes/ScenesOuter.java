package com.example.yuwei.jnplants.main.scenes;

import com.example.yuwei.jnplants.interfaces.MyFragment;
import com.example.yuwei.jnplants.main.MainOuter;

/**
 * Created by yuwei on 15/4/15.
 */
public class ScenesOuter implements MyFragment {
    @Override
    public android.support.v4.app.Fragment getFragment(){
        return BeautifulScenesFragment.getInstance();
    }

    public static Scene getApiScene(){
//      TODO：添加用来初始化ApiScene的参数
        return new Scene();
    }
    public static class Scene implements MyFragment {
//      TODO：添加初始化Fragment所需参数，以及修改函数体，
        public void ShowSceneFragment(){
            MainOuter.replaceContainer(new Scene());
        }
//      TODO：完成ShowSceneFragment调用的相应构造函数
        public Scene() {
        }

        @Override
        public android.support.v4.app.Fragment getFragment() {
            return SceneFragment.getInstance();
        }

    }
}


