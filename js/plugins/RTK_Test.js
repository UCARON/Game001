﻿//=============================================================================
// RTK_Test.js	2016/07/30
// The MIT License (MIT)
//=============================================================================

/*:
 * @plugindesc テスト用プラグイン
 * @author Toshio Yamashita (yamachan)
 *
 * @param アクター名の後にIDを表示
 * @desc アクター名の後にIDを表示する (0:OFF 1:ON)
 * @default 1
 *
 * @help このプラグインにはプラグインコマンドはありません。
 * テスト用に作成したものなので、実際に利用する場合には適当にリネームしてください
 */

(function(_global) {
	// ここにプラグイン処理を記載
	var N = 'RTK_Test';
	var param = PluginManager.parameters(N);
	var show_id = Number(param['アクター名の後にIDを表示'])||1;

  var _Game_Actor_name = Game_Actor.prototype.name;
	Game_Actor.prototype.name = function() {
		var ret = _Game_Actor_name.call(this);
		if (show_id) {
			return ret + ":" + this.actorId();
		} else {
			return ret;          
		}
	};

	var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
	Game_Interpreter.prototype.pluginCommand = function(command, args) {
		_Game_Interpreter_pluginCommand.call(this, command, args);
		if (command == N) {
			if (args[0] == "show_id") {
				if (args[1] == "on") {
					show_id = 1;
				} else if (args[1] == "off") {
					show_id = 0;
				}
			}
		}
	};
})(this);
