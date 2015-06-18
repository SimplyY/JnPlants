package com.example.yuwei.jnplants.scenes;

import android.support.v4.app.Fragment;

import com.example.yuwei.jnplants.interfaces.ApiFragment;
import com.example.yuwei.jnplants.main.ApiMain;
import com.example.yuwei.jnplants.plant.ApiPlant;

/**
 * Created by yuwei on 15/4/15.
 */
public class ApiScenes implements ApiFragment{
    @Override
    public Fragment getFragment(){
        return BeautifulScenesFragment.getInstance();
    }

    public static ApiScene getApiScene(){
//      TODO：添加用来初始化ApiScene的参数
        return new ApiScene();
    }
    public static class ApiScene implements ApiFragment{
//      TODO：添加初始化Fragment所需参数，以及修改函数体，
        public void ShowSceneFragment(){
            ApiMain.replaceContainer(new ApiScene());
        }
//      TODO：完成ShowSceneFragment调用的相应构造函数
        public ApiScene() {
        }

        @Override
        public Fragment getFragment() {
            return SceneFragment.getInstance();
        }

    }
}


