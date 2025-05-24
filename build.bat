@echo off
echo Building Fengming Liu's Academic Website...

echo Installing dependencies...
call npm install

echo Building project...
call npm run build

if %errorlevel% equ 0 (
    echo ✅ Build completed successfully!
    echo 📁 Build files are in the 'dist' directory
    echo 🚀 You can now deploy the contents of the 'dist' directory to your web server
    
    REM Show build directory contents
    if exist dist (
        echo 📊 Build contents:
        dir dist /s /b
    )
) else (
    echo ❌ Build failed!
    exit /b 1
)

pause
