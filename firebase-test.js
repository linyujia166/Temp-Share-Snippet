// Firebase连接测试脚本
const { initializeApp, getApps } = require('firebase/app');
const { getFirestore, collection, addDoc } = require('firebase/firestore');
const { getStorage } = require('firebase/storage');

const firebaseConfig = {
  apiKey: "AIzaSyB-NRcUV70c6i9F6olTuWQerWi2eSIguMM",
  authDomain: "temp-share-snippet.firebaseapp.com",
  projectId: "temp-share-snippet",
  storageBucket: "temp-share-snippet.firebasestorage.app",
  messagingSenderId: "67674109358",
  appId: "1:67674109358:web:c0f9796beecba75cc38a69"
};

async function testFirebase() {
  try {
    // 初始化Firebase
    const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
    console.log('✅ Firebase 初始化成功');

    // 测试Firestore连接
    const db = getFirestore(app);
    console.log('✅ Firestore 连接成功');

    // 测试Storage连接
    const storage = getStorage(app);
    console.log('✅ Storage 连接成功');

    // 测试写入数据
    const testDoc = await addDoc(collection(db, 'test'), {
      message: 'Firebase测试成功！',
      timestamp: new Date()
    });
    console.log('✅ 数据写入成功，文档ID:', testDoc.id);

    console.log('\n🎉 所有Firebase服务都配置正确！您的应用已经可以使用真实的数据库功能了！');
    
  } catch (error) {
    console.error('❌ Firebase配置错误:', error.message);
    console.log('\n📋 请检查以下配置：');
    console.log('1. 确保已在Firebase Console中启用Firestore Database');
    console.log('2. 确保已在Firebase Console中启用Storage');
    console.log('3. 确保Firestore规则允许读写（测试模式）');
  }
}

testFirebase(); 