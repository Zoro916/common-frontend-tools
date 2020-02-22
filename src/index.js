import './tools/jQuery';
import request from './tools/request';
const ta = global.$;


const add = (a, b) => a + b;

/**
 * @author zoulei
 * @name 求和函数
 * @function
 * @description 输入2个参数，求2个参数的和
 * @param {a} 第一个参数
 * @param {b} 第二个参数
 * @return {a} 213
 */



/**
 * @author Scarlex
 * @class
 * @name Application
 * @description Base Class of Application.
 * @param {Element} canvas The canvas dom element.
 * @param {Object} options The options of Application. See {@link Option} for detail.
 * @return {Application}
 *
 * @example
 * // create your application
 * new Application(canvas, options);
 */
class Aplication {

  /**
   * @private
   * @function
   * @name Application#intialize
   * @description Initialize the application.
   */
  initialize() {

  }
}
export {
  add,
  ta,
  request,
};