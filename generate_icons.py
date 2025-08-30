#!/usr/bin/env python3
"""
CPP Master PWAアイコン生成スクリプト
SVGからPNGの各サイズアイコンを生成します
"""

import subprocess
import sys
import os
from pathlib import Path

# 必要なアイコンサイズ
ICON_SIZES = [72, 96, 128, 144, 152, 192, 384, 512]

def check_dependencies():
    """必要なツールの確認"""
    try:
        # ImageMagickの確認
        result = subprocess.run(['magick', '-version'], 
                              capture_output=True, text=True, check=True)
        print("OK: ImageMagick が利用可能です")
        return True
    except (subprocess.CalledProcessError, FileNotFoundError):
        print("ERROR: ImageMagick が見つかりません")
        print("ImageMagickをインストールしてください:")
        print("https://imagemagick.org/script/download.php")
        return False

def generate_png_icon(svg_path, output_path, size):
    """SVGからPNGアイコンを生成"""
    try:
        cmd = [
            'magick',
            '-background', 'none',
            '-density', '300',  # 高解像度で生成
            f'{svg_path}',
            '-resize', f'{size}x{size}',
            '-quality', '95',
            f'{output_path}'
        ]
        
        subprocess.run(cmd, check=True, capture_output=True)
        print(f"OK: {output_path} を生成しました ({size}x{size})")
        return True
        
    except subprocess.CalledProcessError as e:
        print(f"ERROR: {output_path} の生成に失敗: {e.stderr.decode()}")
        return False

def create_simple_fallback_icons():
    """ImageMagickが利用できない場合の簡易アイコン作成"""
    print("ImageMagickが利用できないため、簡易SVGアイコンを作成します...")
    
    for size in ICON_SIZES:
        # 各サイズごとにSVGファイルを作成
        svg_content = f'''<svg width="{size}" height="{size}" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <circle cx="256" cy="256" r="256" fill="#1976d2"/>
  <text x="256" y="280" text-anchor="middle" font-family="Arial, sans-serif" font-size="120" font-weight="bold" fill="#ffffff">CPP</text>
  <text x="256" y="350" text-anchor="middle" font-family="Arial, sans-serif" font-size="40" fill="#ffffff" opacity="0.9">Master</text>
</svg>'''
        
        # SVGファイルとして保存（多くのブラウザはSVGアイコンをサポート）
        svg_file = f"icon-{size}.svg"
        with open(svg_file, 'w', encoding='utf-8') as f:
            f.write(svg_content)
        print(f"OK: {svg_file} を作成しました")
    
    print("\nWARNING: SVGアイコンを作成しました。")
    print("より良い互換性のためには、ImageMagickをインストールしてPNGアイコンを生成してください。")

def main():
    print("CPP Master PWA アイコンを生成中...")
    
    # 基本SVGファイルの存在確認
    svg_path = Path("icon-base.svg")
    if not svg_path.exists():
        print("ERROR: icon-base.svg が見つかりません")
        return False
    
    # ImageMagickの確認
    if not check_dependencies():
        create_simple_fallback_icons()
        return True
    
    # 各サイズのPNGアイコンを生成
    success_count = 0
    for size in ICON_SIZES:
        output_file = f"icon-{size}.png"
        if generate_png_icon(svg_path, output_file, size):
            success_count += 1
    
    print(f"\n完了: {success_count}/{len(ICON_SIZES)} 個のアイコンを生成しました!")
    
    if success_count == len(ICON_SIZES):
        print("SUCCESS: すべてのPWAアイコンが正常に生成されました")
        return True
    else:
        print("WARNING: 一部のアイコン生成に失敗しました")
        return False

if __name__ == "__main__":
    success = main()
    sys.exit(0 if success else 1)