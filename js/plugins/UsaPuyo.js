﻿/*:
 * @plugindesc うさぷよ  ver 1.0.1 
 * うさぷよでパズルが楽しめます
 * @author UC
 * @help テスト
 */

Game_Map.prototype.MakeFieldUsa = function(width,height){
	for(var i = 0; i < height;i++){
		for(var j = 0;j < width;j++){
			if(!(i==0 && j==0)){
				$gameMap.spawnEvent(1,1 + j,7 - i,0);
			}
		}
	}
}
