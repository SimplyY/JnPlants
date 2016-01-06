package com.example.yuwei.jnplants.main;

import android.support.v4.app.Fragment;
import android.os.Bundle;
import android.support.v4.app.FragmentManager;
import android.support.v4.app.FragmentTransaction;
import android.support.v7.app.ActionBarActivity;

import com.example.yuwei.jnplants.R;


/**
 * Created by yuwei on 15/4/15.
 */

public class MainActivity extends ActionBarActivity {

    private static MainActivity mainActivity;

    static MainActivity getInstance() {
        return mainActivity;
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        mainActivity = this;
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

//      初始化控件
    }


    void replaceFragment(Fragment targetShowingFragment){
        FragmentManager fragmentManager = getSupportFragmentManager();
        FragmentTransaction fragmentTransaction = fragmentManager.beginTransaction();
        fragmentTransaction.replace(R.id.container, targetShowingFragment);
    }

}
