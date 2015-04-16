package com.example.yuwei.jnplants.plant;

import android.support.v4.app.Fragment;

import com.example.yuwei.jnplants.interfaces.ApiFragment;

/**
 * Created by yuwei on 15/4/15.
 */
public class ApiPlant implements ApiFragment{

    @Override
    public Fragment getFragment(){
        return PlantFragment.getInstace();
    }

    public Plant getPlant(String plantName){

    }


}
