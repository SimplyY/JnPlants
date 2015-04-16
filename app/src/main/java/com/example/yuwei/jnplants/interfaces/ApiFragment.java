package com.example.yuwei.jnplants.interfaces;

import android.support.v4.app.Fragment;

/**
 * Created by yuwei on 15/4/15.
 */
//使用了策略模式
//所有填充activity的container的fragment都应该实现这个接口
public interface ApiFragment {
    public Fragment getFragment();
}
