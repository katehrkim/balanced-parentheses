import unittest
from balance_parens import balance_parens

# Add more test cases!...
class BalanceParensTestCase(unittest.TestCase):
    """Tests for balance_parens.py"""
    def test_one(self):
        self.assertEqual(balance_parens("abc(d)e(fgh))(i)j)k"), "abc(d)e(fgh)(i)jk")
    def test_two(self):
        self.assertEqual(balance_parens("abc((d)e(fgh)(i)j(k"), "abc(d)e(fgh)(i)jk")
    # Challenge: nested parentheses...
    def test_three(self):
        self.assertEqual(balance_parens
        ("abc(d)(ef(g(h))ij)k)lm()o)p"), 
        "abc(d)(ef(g(h))ij)klm()op")

if __name__ == '__main__':
    unittest.main()
