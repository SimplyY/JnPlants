package com.example.yuwei.jnplants.main;

import android.support.v4.app.Fragment;
import android.os.Bundle;
import android.support.v4.app.FragmentManager;
import android.support.v4.app.FragmentTransaction;
import android.support.v7.app.ActionBarActivity;
import android.support.v7.widget.Toolbar;
import android.support.v7.app.ActionBarDrawerToggle;
import android.view.View;

import com.example.yuwei.jnplants.R;
import com.heinrichreimersoftware.materialdrawer.DrawerFrameLayout;
import com.heinrichreimersoftware.materialdrawer.structure.DrawerItem;
import com.heinrichreimersoftware.materialdrawer.structure.DrawerProfile;


/**
 * Created by yuwei on 15/4/15.
 */

class MainActivity extends ActionBarActivity {

    private static MainActivity mainActivity;
    private Toolbar toolbar;
    private DrawerFrameLayout drawer;

    static MainActivity getInstance() {
        return mainActivity;
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        mainActivity = this;
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

//      初始化控件
        initToolbar();
        initDrawer();
        initDrawerArrow();
    }

    private void initToolbar(){
        toolbar = (Toolbar) findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);
    }

    private void initDrawer(){
        drawer = (DrawerFrameLayout) findViewById(R.id.drawer);
        drawer.setProfile(
                new DrawerProfile()
                        .setBackground(getResources().getDrawable(R.drawable.drawer_background))
                        .setName(getString(R.string.drawer_name))
                        .setDescription(getString(R.string.drawer_description))
        );

        addItemForDrawer(R.string.drawer_item_beautiful_scene, R.drawable.drawer_item_icon_beautiful_scenes);
        addItemForDrawer(R.string.drawer_item_search, R.drawable.drawer_item_icon_search);
    }
    private void addItemForDrawer(int strId, int imageId){
        Container.setItemFragmentName(strId);
        drawer.addItem(
                new DrawerItem()
                        .setTextPrimary(getString(strId))
                        .setImage(getResources().getDrawable(imageId))
                        .setOnItemClickListener(new DrawerItem.OnItemClickListener() {
                            @Override
                            public void onClick(DrawerItem drawerItem, int id, int position) {
                                Fragment targetShowingFragment = Container.getTargetFragment(position);
                                replaceFragment(targetShowingFragment);
                            }
                        })
        );
    }

    private void initDrawerArrow(){
        ActionBarDrawerToggle drawerToggle = new ActionBarDrawerToggle(this, drawer,
                toolbar, R.string.app_name, R.string.app_name
        ) {

            public void onDrawerClosed(View view) {
                super.onDrawerClosed(view);
                invalidateOptionsMenu();
            }

            public void onDrawerOpened(View drawerView) {
                super.onDrawerOpened(drawerView);
                invalidateOptionsMenu();
            }
        };

        drawer.setDrawerListener(drawerToggle);
        drawerToggle.syncState();
    }

    void replaceFragment(Fragment targetShowingFragment){
        FragmentManager fragmentManager = getSupportFragmentManager();
        FragmentTransaction fragmentTransaction = fragmentManager.beginTransaction();
        fragmentTransaction.replace(R.id.container, targetShowingFragment);
    }

}
