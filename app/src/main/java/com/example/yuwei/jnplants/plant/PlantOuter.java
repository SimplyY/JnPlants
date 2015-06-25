package com.example.yuwei.jnplants.plant;

import android.support.v4.app.Fragment;

import com.example.yuwei.jnplants.interfaces.MyFragment;

/**
 * Created by yuwei on 15/4/15.
 */
public class PlantOuter implements MyFragment {

    @Override

    public Fragment getFragment(){

        return PlantFragment.getInstance();
    }

    public Plant getPlant(String plantName){
        return new Plant();
    }


}
