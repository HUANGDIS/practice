//请你反转链表，并返回反转后的链表。
const reverseList = function (head) {
  let [pre, node] = [null, head];
  while (node) {
    const temp = node.next;
    node.next = pre;
    pre = node;
    node = temp;
  }
  return pre;
}
let head = [1, 2, 3, 4, 5]
console.log(reverseList(head))