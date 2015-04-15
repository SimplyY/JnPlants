package com.example.yuwei.jnplants.search;

import android.support.v4.app.Fragment;

import com.example.yuwei.jnplants.interfaces.ApiFragment;
import com.example.yuwei.jnplants.scenes.BeautifulScenesFragment;

/**
 * Created by yuwei on 15/4/15.
 */
public class ApiSearch implements ApiFragment{
    @Override
    public Fragment getFragment(){
        return BeautifulScenesFragment.getInstace();
    }
}
