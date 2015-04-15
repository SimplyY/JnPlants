package com.example.yuwei.jnplants.main;

import android.os.Bundle;
import android.support.v7.app.ActionBarActivity;

import com.example.yuwei.jnplants.R;
import com.heinrichreimersoftware.materialdrawer.DrawerFrameLayout;
import com.heinrichreimersoftware.materialdrawer.structure.DrawerItem;
import com.heinrichreimersoftware.materialdrawer.structure.DrawerProfile;

/**
 * Created by yuwei on 15/4/15.
 */
public class MainActivity extends ActionBarActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        initDrawer();
    }

    private void initDrawer(){
        DrawerFrameLayout drawer = (DrawerFrameLayout) findViewById(R.id.drawer);
        drawer.setProfile(
                new DrawerProfile()
                        .setBackground(getResources().getDrawable(R.drawable.drawer_background))
                        .setName(getString(R.string.drawer_name))
                        .setDescription(getString(R.string.drawer_description))
        );

        addItemForDrawer(drawer, R.string.drawer_item_beautiful_scene
                , R.drawable.drawer_item_icon_beautiful_scenes);

        addItemForDrawer(drawer, R.string.drawer_item_search
                , R.drawable.drawer_item_icon_search);
    }
    private void addItemForDrawer(DrawerFrameLayout drawer, int strId, int imageId){
        drawer.addItem(
                new DrawerItem()
                        .setTextPrimary(getString(strId))
                        .setImage(getResources().getDrawable(imageId))
                        .setOnItemClickListener(new DrawerItem.OnItemClickListener() {
                            @Override
                            public void onClick(DrawerItem drawerItem, int id, int position) {
//                              TODO:
                            }
                        })
        );
    }


}
