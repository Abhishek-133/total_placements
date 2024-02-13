#include<iostream>
using namespace std;
class Base{
	public:
		virtual void show(){
			cout<<"Base class\n";
		}
};

class Derived : public Base{
	public:
		void show(){
			cout<<"Derived class\n";
		}
};
int main(){
	Base* basePtr;
	Derived derivedObj;
	basePtr = &derivedObj;
	basePtr->show();
	return 0;
}
